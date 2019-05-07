import axios from 'axios';

export function loadPalette(){
    return(dispatch) => {
        return axios.get(" http://www.colr.org/json/colors/random/7").then((response)=>{
            dispatch(changePalette(response.data.matching_colors))
        }).catch((err)=>{
                dispatch({
                    type: 'CHANGE_PALETTE_ERROR',
                    err 
                })
            })
    }
}

export function changePalette(palette){
    return {
        type: 'CHANGE_PALETTE',
        palette: palette.map(each=>"#"+each)
    }
}

export function addPalette(numOfPalettes){
    return (dispatch) => {
        dispatch(loadPalette()).then(()=>{
            dispatch({
                type: 'ADD_PALETTE',
        numOfPalettes: numOfPalettes+1
            })
        })
    }
}