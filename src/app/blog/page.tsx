'use client'
import React, { useState, useEffect } from "react"
import BlogComponent from "@/components/BlogComponent"
import { nanoid } from "nanoid"
import {
  useSelector,
  useDispatch,
  selectBlog,
  getBlogAsync
} from '@/lib/redux'

export default function BlogPage() {
  //implement using redux-thunk
  const dispatch = useDispatch()
    const blogs = useSelector(selectBlog)
    useEffect(() => {
        dispatch(getBlogAsync())
    }, [dispatch]);   
  
    return (
      <>
        <h1>Blog page</h1>
        { blogs.map(item => <BlogComponent title={item.title} author={item.author} avatar={item.avatar} picture={item.picture} content={item.content} key={nanoid()}/>)}
      </>
    )
  }
  