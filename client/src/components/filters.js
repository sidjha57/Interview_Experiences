import axios from "axios";

export const INITIAL_STATE = {
    colleges: [],
    roles: [],
    companies: [],
    categories: [],
    types: [],
    experiences: [],
    status: [],
    levels: [],
    college: "",
    role: "",
    company: "",
    cat: "",
    type: "",
    experience: "",
    status: "",
    level: "",
}

export const filterReducer = (state,action) => {
    switch(action.type) {
        case "FETCH_FILTERS":
            
           return { 
              ...state  
           }
        case "SELECT_FILTER":
            return {
                ...state,
                [action.payload.name] : [action.payload.value]
            }
        
        default:
            return {
                ...state
            }
    }
}