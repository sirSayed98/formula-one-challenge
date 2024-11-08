import { useNavigate } from 'react-router-dom';

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
