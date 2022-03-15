import React from 'react'
import { SnackbarProvider } from 'notistack';
import TestOwnerCard from './TestOwnerCard';

function SnackBar({owner,pet}){
    <SnackbarProvider maxSnack={3}>
        <TestOwnerCard key={owner.id} owner={owner} pet={pet}/>
    </SnackbarProvider>

}

export default SnackBar