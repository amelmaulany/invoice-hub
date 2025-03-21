import * as ErrorState from '@/components/shared-page-states/templates/templates'
import Button from '@/components/shared/button/button';
import { faHome } from '@fortawesome/pro-regular-svg-icons';
import en from '@/locales/en.json'

const labels = en.notFound;

export const metadata = {
    title: labels.meta
}

const NotFound = () => {
    return (
        <ErrorState.Root>
            <ErrorState.Animation src='/animations/not-found.lottie' />
             <ErrorState.TextWrapper>
                <ErrorState.Title>{labels.title}</ErrorState.Title>
                <ErrorState.Description>{labels.description}</ErrorState.Description>
              </ErrorState.TextWrapper>
            <Button href='/' type='link' startAdornment={faHome}>{labels.homeBtn}</Button>
        </ErrorState.Root>
    )
}

export default NotFound;