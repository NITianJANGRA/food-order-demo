export const SET_LOADER = 'SET_LOADER';
export const UNSET_LOADER = 'UNSET_LOADER';

const initialLoadingState = false;

// if we directly return true/false that will be always treated as state change.

export const loadingReducer = (isLoading = initialLoadingState, action) => {
    switch (action.type) {
        case SET_LOADER:
            return true;
        case UNSET_LOADER:
            return false;

        default:
            return isLoading;
    }
}