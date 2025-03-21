import * as ErrorState from '@/components/shared-page-states/templates/templates'
import Button from '@/components/shared/button/button';
import { faHome } from '@fortawesome/pro-regular-svg-icons';

const NotFound = () => {
    return (
        <ErrorState.Root>
            <ErrorState.Animation src='/animations/not-found.lottie' />
            <div className="flex flex-col">
                <ErrorState.Title>Not Found</ErrorState.Title>
                <ErrorState.Description>Page that you looking for is not found.</ErrorState.Description>
            </div>
            <Button href='/' type='link' startAdornment={faHome}>Back to home</Button>
        </ErrorState.Root>
    )
}

export default NotFound;