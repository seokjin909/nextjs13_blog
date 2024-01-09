'use client'
import React from 'react'
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {materialDark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import Image from 'next/image';

function MarkdownViewer({content}: {content : string}) {
  return (
    <ReactMarkdown className='prose max-w-none' remarkPlugins={[remarkGfm]}
    components={{
        code(props) {
          const {children, className, node, ...rest} = props
          const match = /language-(\w+)/.exec(className || '')
          return match ? (
            <SyntaxHighlighter
            language={match[1]}
            PreTag="div"
            {...rest}
            ref={null}
            style={materialDark}
            >{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          )
        },
        img:(image) => (<Image className='w-full max-h-60 object-cover' src={image.src || ''} alt={image.alt || ''} width={500} height={350} />)
    }}
        
    >{content}</ReactMarkdown>
  )
}

export default MarkdownViewer