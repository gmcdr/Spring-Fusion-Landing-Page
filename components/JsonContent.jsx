"use client"
import React, { useEffect } from 'react';
import hljs from 'highlight.js';

const JsonContent = ({ jsonCode }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre className=''>
      <code className="json">
        {jsonCode}
      </code>
    </pre>
  );
};

export default JsonContent;
