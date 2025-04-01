import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from '../ui/textarea'
import axios from 'axios'
import { toast } from 'sonner'



export function AddBlog() {

    
    const [open, setOpen] = useState(false)
    const [form, setForm] = useState({
        title:"",
        desc:""
    });

    const handleSubmit = async (e:React.FormEvent) => {
      e.preventDefault();
      try {
        const res = await axios.post("/api/home", form);
        console.log(res);
        toast.success("Blog added Successfuly");
        setForm({title:"", desc:""})
        setOpen(false);
        location.reload();
      } catch (error:any) {
        toast.error(error.message);
        console.log("Added failed", error.message);
      }
    }

  return (
    <div className="">
    
    <Button variant="outline" onClick={() => setOpen(true)} className='p-6 text-xl'>Add Blog</Button>
    <Dialog open={open} >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Blog</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input id="title" value={form.title} onChange={(e:any) => setForm({...form, title:e.target.value})} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea id="description" value={form.desc} onChange={(e:any) => setForm({...form, desc:e.target.value})} className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
        <Button type="submit" onClick={() => setOpen(false)}>Cancel</Button>
          <Button type="submit" onClick={handleSubmit}>Add</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </div>
  )
}

export default AddBlog