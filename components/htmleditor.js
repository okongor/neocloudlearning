// components/MonacoEditorExample.js
import React, { useEffect } from 'react';
import * as monaco from 'monaco-editor';
import styles from './htmleditor.module.css';
const MonacoEditorExample = () => {
  useEffect(() => {
    // Load Monaco Editor
    const editor = monaco.editor.create(document.getElementById('editor'), {
      value: '',
      language: 'javascript',
      theme: 'vs-dark',
      automaticLayout: true,
    });

    // Enable syntax highlighting and language recognition
    monaco.languages.register({ id: 'javascript' });
    monaco.languages.setMonarchTokensProvider('javascript', {
      tokenizer: {
        root: [
          [/\b(?:if|else|for|while|function|return|var|let|const)\b/, 'keyword'],
          [/[{}]/, 'delimiter.bracket'],
          [/[()\[\]]/, 'delimiter.parenthesis'],
          [/[<>]/, 'delimiter.angle'],
          [/@symbols/, 'delimiter'],
          [/\d+/, 'number'],
          [/".*?"/, 'string'],
          [/'[^\\']'/, 'string'],
          [/'[^\\']*$/, 'string.invalid'],
          [/'/, 'string', '@stringBody'],
          [
            /[a-z_$][\w$]*/,
            {
              cases: {
                '@keywords': 'keyword',
                '@default': 'identifier',
              },
            },
          ],
        ],
        stringBody: [
          [/[^\\']+/, 'string'],
          [/\\./, 'string.escape'],
          [/'/, 'string', '@pop'],
        ],
      },
    });

    window.editor = editor;
  }, []);

  const runCode = () => {
    const code = window.editor.getValue();
    const resultElement = document.getElementById('result');
    try {
      // Create a new iframe to safely execute HTML, CSS, and JavaScript
      const iframe = document.createElement('iframe');
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      resultElement.innerHTML = '';
      resultElement.appendChild(iframe);
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      iframeDoc.open();
      iframeDoc.write(code);
      iframeDoc.close();
    } catch (error) {
      resultElement.innerText = error;
    }
  };

  return (
    <div className="main">
      <header className='header'>
        <h3>Code</h3>
        <h3>Result</h3>
      </header>
      <div className="mainf">
        <div id="editor" style={{ width: '50%', height: '400px' }}></div>
        <div id="result" style={{ width: '50%', height: '400px', border: '1px solid #ccc' }}></div>
      </div>
      <button className='button' onClick={runCode}>Run</button>
    </div>
  );
};

export default MonacoEditorExample;
