const useStyles = () => {
    return {
        container: 'modal rounded',
        closeButtonContainer: 'd-flex justify-content-end',
        closeButton: 'mx-3',
        content: 'modal__content col-sm-12 col-md-10 pb-4 pt-1 d-flex flex-column justify-content-between',
        contentBody: 'modal__content--body',
        header: 'p-1 d-flex justify-content-center',
        body: 'modal__body h-100  d-flex justify-content-center px-5',
        footer: 'p-1 d-flex justify-content-center',
    }
}

export default useStyles
