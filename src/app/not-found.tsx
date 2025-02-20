import Button from '@/components/shared/button/button';
import { faTriangleExclamation } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NotFound = () => {
  return (
    <div className="flex h-[calc(100vh-80px)] flex-col items-center justify-center gap-2 p-3">
      <FontAwesomeIcon
        icon={faTriangleExclamation}
        fixedWidth
        fontSize={48}
        className="text-slate-500"
      />
      <div className="flex flex-col items-center">
        <span className="text-lg font-semibold text-slate-800">Not found.</span>
        <span className="text-md text-slate-500">Page is not found.</span>
      </div>
      <Button href="/" type="link">
        Back to home
      </Button>
    </div>
  );
};

export default NotFound;
