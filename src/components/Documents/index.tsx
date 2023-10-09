/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { Button, CircularProgress, Grid, Stack, Typography } from '@mui/material';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
import axios from 'axios';
import toast from 'react-hot-toast';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
// import { Document, Page } from 'react-pdf';

interface IViewDocumentProps {
  document: any;
}

const ViewDocument = (props: IViewDocumentProps) => {
  const { document } = props;
  console.log('document', document);
  if (document.path) {
    const docs = [
      {
        uri: document.path,
        fileType: document.contentType.split('/')[1],
        fileName: document.fileName.split('.')[0],
      }, // Remote file
    ];
    console.log('docs', docs);

    return (
      <DocViewer
        documents={docs}
        pluginRenderers={DocViewerRenderers}
        config={{
          header: {
            disableHeader: false,
            disableFileName: false,
            retainURLParams: false,
          },
        }}
      />
    );
    // return <Document file={document.path} />;
  }
  return <>Please Select File to view</>;
  // return <Document file={document.path} />;
};

const Documents = () => {
  const [documents, setDocuments] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [doc, setDoc] = useState({
    path: '',
    contentType: '',
    fileName: '',
  });
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/user/documents`)
      .then((res) => {
        setDocuments(res?.data?.data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <Stack
        sx={{
          alignItems: 'center',
          height: ' calc(100vh - 190px)',
          justifyContent: 'center',
        }}
      >
        <CircularProgress />
      </Stack>
    );
  }
  console.log('doc', doc);
  return (
    <Grid
      container
      sx={{
        // backgroundColor: 'green',
        marginTop: '-10px',
        padding: '20px',
      }}
    >
      <Grid item lg={3} md={6}>
        <ol>
          {documents.length !== 0 ? (
            documents.map((doc: any) => {
              return (
                <li key={doc._id}>
                  <Button
                    onClick={() => {
                      setDoc({
                        path: `${process.env.REACT_APP_BACKEND_URL}/${doc.doc.path}`,
                        contentType: doc.doc.contentType,
                        fileName: doc.doc.fileName,
                      });
                    }}
                    sx={{
                      width: 'fit-content',
                    }}
                  >
                    {doc.title}
                  </Button>
                </li>
              );
            })
          ) : (
            <Stack>
              <Typography>No Data</Typography>
            </Stack>
          )}
        </ol>
      </Grid>
      <Grid item lg={9} md={6}>
        <ViewDocument document={doc} />
      </Grid>
    </Grid>
  );
};

export default Documents;
