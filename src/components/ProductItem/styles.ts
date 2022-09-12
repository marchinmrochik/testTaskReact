const styles = {
    modalContainer: {
        position: 'absolute' as 'absolute',
        display: "flex",
        alingItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        minWidth: 300,
        maxHeight: '90vh',
        overflowY: 'scroll'
    },
    cardDescription: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: '5',
        WebkitBoxOrient: 'vertical',
    }
}

export default styles;
