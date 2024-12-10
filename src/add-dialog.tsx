
import {CircularProgress, Dialog,DialogActions,DialogContent,DialogTitle,TextField} from "@mui/material";
import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
  
  type AddPostDialogProps = {
    open:boolean;
    onClose:()=>void;
    onSave:(newPosts:any)=>void;
  }

  const AddPostDialog: React.FC<AddPostDialogProps>=({
    open,
    onClose,
    onSave,
    
  })=>{
    const [newPosts , setNewPosts] = useState<any>({
        title:"",
        Description:"",
        tags:"",
})
const [isSaving, setIsSaving] = useState(false);
 const [errors,setErrors] = useState<any>({});

const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = e.target;
    setNewPosts({
        ...newPosts,
        [name]:value,
    })
    if (errors[name]){
        setErrors((prevErrors:any)=>({
            ...prevErrors,
            [name]:"",
        }))
    }
}
   const validateFields=()=>{
    const newErrors:any={};
    if(!newPosts.title)newErrors.title = "title is required"
    if(!newPosts.Description)newErrors.Description="Description are required"
    if(!newPosts.tags)newErrors.tags="tags are required"

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0
   }
   const handleSave = async()=>{
    if (validateFields()){
        setIsSaving(true)
        try{
            onSave(newPosts);
            onClose()
            resetForm()
        }catch(errors){
            console.log("Failed to add Posts:",errors)
        }finally {
            setIsSaving(false)
        }
    }
   }
   const resetForm = () =>{
    setNewPosts({
        title:"",
        Description:"",
        tags:"",
    })
    setErrors({})
   }
    const handleClose = () =>{
        resetForm();
        onClose();
    }
    return(
        <Dialog open ={open} onClose = {handleClose} maxWidth="sm">
            <DialogTitle sx={{
                paddingBottom:"6px"
            }}>
                Add
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                <Grid  item xs={12}>
                    <TextField 
                    name="title"
                    label = "Title"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={newPosts.title}
                    onChange={handleInputChange}
                    error={!!errors.title}
                />
           </Grid>
           <Grid  item xs={12}>
                    <TextField 
                    name="Description"
                    label = "Description"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={newPosts.Description}
                    onChange={handleInputChange}
                    error={!!errors.Description}
                />
           </Grid>
           <Grid  item xs={12}>
                    <TextField 
                    name="tags"
                    label = "Tags"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={newPosts.tags}
                    onChange={handleInputChange}
                    error={!!errors.tags}
                />
           </Grid>
           </Grid>
            </DialogContent>
            <DialogActions sx={{
                display:"flex",
                gap:2,
                justifyContent:"space-between",
                marginRight:2,
                marginLeft:2,
                padding:"0px 10px 16px 10px",
            }}>
                <Button 
                onClick={handleClose}
                variant="outlined"
                color="primary">
                    Cancel
                </Button>

                <Button 
                onClick={handleSave}
                variant="contained"
                disabled = {isSaving}
                startIcon = {isSaving?<CircularProgress size={10}/> :null}
                >
                    {isSaving ? "Add":"Adding"}
                </Button>
            </DialogActions>
        </Dialog>
    )
  }

  export default AddPostDialog