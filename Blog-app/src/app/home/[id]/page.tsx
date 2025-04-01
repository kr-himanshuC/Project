"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
// import Loading from '@/components/myComp/Loading';


const page = () => {

    const [open, setOpen] = useState(false)
    const [form, setForm] = useState({
        title: "",
        desc: ""
    });

    const { id }: any = useParams();


    const [blog, setBlog] = useState({
        title: "",
        desc: ""
    });

    const getBlog = async (id: string) => {
        try {
            const res = await axios.get(`/api/getBlog/?id=` + id)
            const data = res.data.blog;

            setBlog({ ...blog, title: data.title, desc: data.desc });
            setForm({ ...form, title: data.title, desc: data.desc });
        } catch (error: any) {
            toast.error(error.message);
            console.log("Blogs not fetch", error.message);
        }

    }


    useEffect(() => {
        getBlog(id);
    }, [id])


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const data = await axios.put(`/api/home/?id=`+id, form);
            console.log(data.data);
            
            toast.success("Blog added Successfuly")
            setOpen(false);
            location.reload();
        } catch (error: any) {
            toast.error(error.message);
            console.log("Added failed", error.message);
        }
    }

    return (

        <div className='flex justify-center items-center h-[80%]'>
        
            <Card className="w-[350px]">
                {/* <CardHeader>
                    <CardTitle></CardTitle>
                </CardHeader> */}
                <CardContent className='flex flex-col gap-4'>
                     <div className="text-black text-xl font-bold">{blog.title}</div>
                    <div className="">{blog.desc}</div>
                </CardContent>
                <CardFooter className="flex justify-end">
                    {/* <Button variant="outline" className='text-xl'>Cancel</Button> */}
                    <Button variant="outline" onClick={() => setOpen(true)} className='p-5 text-xl'>Update</Button>
                </CardFooter>
            </Card>
            

            <Dialog open={open} >
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Update Blog</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="title" className="text-right">
                                Title
                            </Label>
                            <Input id="title" value={form.title} onChange={(e: any) => setForm({ ...form, title: e.target.value })} className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                                Description
                            </Label>
                            <Textarea id="description" value={form.desc} onChange={(e: any) => setForm({ ...form, desc: e.target.value })} className="col-span-3" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" onClick={() => setOpen(false)}>Cancel</Button>
                        <Button type="submit" onClick={handleSubmit}>Update</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default page