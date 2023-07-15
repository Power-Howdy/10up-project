'use client'
import React, { useState, useEffect } from "react"
import BlogComponent from "@/components/BlogComponent"
import { nanoid } from "nanoid"
export default function BlogPage() {
  type BlogType = {
    title: string,
    author: string,
    avatar: string,
    picture: string,
    content: string
  }
  const [blogs, setBlogs] = useState<BlogType[]>([]);

  useEffect(() => {
    //fetch data
    setBlogs([
      //
    ])
  }, [])
    return (
      <>
        <h1>Blog page</h1>
        { blogs.map(item => <BlogComponent title={item.title} author={item.author} avatar={item.avatar} picture={item.picture} content={item.content} key={nanoid()}/>)}
      </>
    )
  }
  