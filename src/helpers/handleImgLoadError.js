const PLACEHOLDER =
  'https://images.unsplash.com/photo-1611587597157-d7e19e8dfe00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=678&q=80';

const handleImgLoadError = ({ currentTarget }) => {
  currentTarget.onerror = null; // prevents looping
  currentTarget.src = PLACEHOLDER;
};

export default handleImgLoadError;
