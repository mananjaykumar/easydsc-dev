
export const useUser = () => {
  const userData = localStorage.getItem('userData');
  if (userData === null) {
    return { firstName: '' };
  }
  const parsedData = JSON.parse(userData);
  console.log('parsed Data', parsedData);
  return { firstName: parsedData.firstName };
};
