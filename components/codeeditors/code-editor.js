import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import styles from './MonacoEditorWithResult.module.css';

const MonacoEditorWithResult = ({ language, initialCode }) => {
  const [code, setCode] = useState(initialCode);
  const [result, setResult] = useState('');

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const runCode = () => {
    if (language === 'javascript') {
     
        try {
            const log = [];
            const consoleLog = console.log;
            console.log = (...args) => {
              log.push(args.join(' '));
              consoleLog.apply(console, args);
            };
    
            // eslint-disable-next-line no-eval
            eval(code);
    
            console.log = consoleLog; // Restore original console.log
            setResult(log.join('\n'));
          } catch (error) {
            setResult(error.message);
          }
        }
      };

  return (
    <div >
        <div className={styles.header}>
                <h2>Code</h2> 
                <h2>Result</h2> 
        </div>
        <div className={styles.container}>
       
      <div className={styles.editorSection}>
        <Editor
          height="100%"
          language={language}
          value={code}
          onChange={handleEditorChange}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            suggestOnTriggerCharacters: false,
            quickSuggestions: false,
            wordBasedSuggestions: false,
            parameterHints: false,
          }}

        />
      </div>
      <div className={styles.resultSection}>
       
        <pre className={styles.result}>{result}</pre>
      </div>
      </div>
      <button className={styles.runButton} onClick={runCode}>Run</button>
    </div>
  );
};

export default MonacoEditorWithResult;
