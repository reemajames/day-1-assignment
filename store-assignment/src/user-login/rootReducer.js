import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    country: '',
    gender: '',
    pan: '',
    education: {
        tenth: { institute: '', cgpa: '' },
        higherSecondary: { institute: '', cgpa: '' },
        graduation: { institute: '', cgpa: '' },
    },
    certifications: []
};
const rootReducer = createSlice({
    name: 'root',
    initialState,
    reducers: {
        setName(state, action) {
            state.name = action.payload;
        },
        setCountry(state, action) {
            state.country = action.payload;
        },
        setGender(state, action) {
            state.gender = action.payload;
        },
        setPan(state, action) {
            state.pan = action.payload;
        },
        setEducation(state, action) {
            state.education = action.payload;
        },
        addCertification(state, action) {
            state.certifications.push(action.payload);
        }
    }
});
export const { setName, setCountry, setGender, setPan, setEducation, addCertification } = rootReducer.actions;
export default rootReducer.reducer;