import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import { useTranslation } from 'react-i18next'

const InstallApp = () => {
    const { t } = useTranslation()

    const [isReadyForInstall, setIsReadyForInstall] = useState(false);

    // console.log(window.addEventListener("beforeinstallprompt", (event) => event))
    useEffect(() => {
        window.addEventListener("beforeinstallprompt", (event) => {
            console.log('event', event)
            // Prevent the mini-infobar from appearing on mobile.
            // event.preventDefault();
            console.log("👍", "beforeinstallprompt", event);
            // Stash the event so it can be triggered later.
            window.deferredPrompt = event;
            // Remove the 'hidden' class from the install button container.
            setIsReadyForInstall(true);
        });
    }, []);

    const downloadApp = async () => {
        console.log("👍", "butInstall-clicked");
        const promptEvent = window.deferredPrompt;
        if (!promptEvent) {
            // The deferred prompt isn't available.
            console.log("oops, no prompt event guardado en window");
            return;
        }
        // Show the install prompt.
        promptEvent.prompt();
        // Log the result
        const result = await promptEvent.userChoice;
        console.log("👍", "userChoice", result);
        // Reset the deferred prompt variable, since
        // prompt() can only be called once.
        window.deferredPrompt = null;
        // Hide the install button.
        setIsReadyForInstall(false);
    }

    return (

        <div className='my-2'>
            {isReadyForInstall &&
                <Button
                    text={t('global.installApp')}
                    type={2}
                    textBold
                    onClick={downloadApp} />
            }
        </div>
    )
}

export default InstallApp