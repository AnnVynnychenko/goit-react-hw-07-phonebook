const BASE_URL = 'https://64f18df80e1e60602d23ebab.mockapi.io/api/hw-07';

export const fetchContacts = async () => {
  const response = await fetch(`${BASE_URL}/contacts`);
  return await response.json();
};

export const addContact = async contact => {
  const response = await fetch(`${BASE_URL}/contacts`, {
    body: JSON.stringify(contact),
  });
  return await response.json();
};

export const deleteContact = async id => {
  const response = await fetch(`${BASE_URL}/contacts/${id}`);
  return await response.json();
};
