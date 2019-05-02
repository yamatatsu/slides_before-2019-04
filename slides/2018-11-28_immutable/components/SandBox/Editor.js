import React from 'react'
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/typescript';
import 'brace/theme/monokai';

export default function Editor(props) {
  const { code, onChange, commands } = props
  return (
    <AceEditor
      width='600px'
      mode="typescript"
      theme="monokai"
      onChange={onChange}
      value={code}
      name="UNIQUE_ID_OF_DIV"
      fontSize={18}
      tabSize={2}
      editorProps={{$blockScrolling: true}}
      commands={commands}
    />
  );
}
