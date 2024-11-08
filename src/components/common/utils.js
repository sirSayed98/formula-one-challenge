import { useNavigate } from 'react-router-dom';
/**
 * useRedirection
 * @description Custom hook to be used for redirection upon clicking on an element.
 * @param {string} link The path to redirect to.
 * @returns {function} A function to be used as an event handler. The function
 *                    will redirect the user to the specified link when invoked.
 */
function useRedirection(link) {
  const navigate = useNavigate();

  const handleNavigation = (e) => {
    e.stopPropagation();
    if (e.target.type === 'button') return;
    navigate(link);
  };

  return handleNavigation;
}

export default useRedirection;
