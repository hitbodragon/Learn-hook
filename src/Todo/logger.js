function logger(reducer) {
    return (PrevState, action) => {
        console.group(action.type);
        console.log('Previous State:', PrevState);
        console.log('Action:', action);

        const newState = reducer(PrevState, action);
        console.log('Next State:', newState);
        console.groupEnd();
        return newState;
    };
}

export default logger;
