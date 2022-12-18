const useStyles = ({ error, success }) => {

    return {
        container: 'position-fixed col-12 d-flex justify-content-end toast-container p-1 z-index-master',
        body: `bg-${error ? 'danger' : success ? 'success' : ''} py-3 px-4 col-12 text-white rounded`,
        text: 'p-0 m-0'
    }
}

export default useStyles;