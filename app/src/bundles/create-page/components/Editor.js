import React, { Component, Fragment } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from 'axios';

class RichEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    }
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    })
  }
  
  post(tmp){
    var api = 'http://localhost:3000/blogs/create'
    
    axios.post(api, tmp)
    .then((response)=>{
        console.log(tmp)
    })
    
    this.setState({
      editorState: EditorState.createEmpty()
    })
}

// code reference: https://blog.csdn.net/qq_20337865/article/details/84566229
// to preview pic locally as base64
imageUploadCallBack = file => new Promise(
  (resolve, reject) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    let img = new Image();
    reader.onload = function (e) {
      img.src = this.result
      resolve({
        data: {
          link: img.src
        }
      })
    }
  }
)


  render() {
    const { editorState } = this.state;
    let tmp = btoa(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    return (
      <div>
        {/* 3rd party library for rich text editor */}
        <div class = "editors">
          <Editor
            editorState={editorState}
            editorStyle={{ border: "1px solid #C0C0C0"}}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
            toolbar={{
              options:['inline','blockType','fontSize','fontFamily','textAlign','list','colorPicker','image','link','embedded'],
              inline: { inDropdown: true },
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
              colorPicker: { className: 'demo-option-custom', popupClassName: 'demo-popup-custom' },
              image: {
                urlEnabled: true,
                uploadEnabled: true,
                alignmentEnabled: true,
                uploadCallback: this.imageUploadCallBack,
                previewImage: true,
                inputAccept: 'image/*',
                alt: {present: false, mandatory: false}
              }
            }}
            onEditorStateChange={this.onEditorStateChange}
          />
          
        </div>
        {/* <textarea
          disabled
          value = {tmp}
        />
        <pre><div dangerouslySetInnerHTML = {{__html:atob(tmp)}} ></div></pre>
        <p>{atob(tmp)}</p> */}
        <br />
        <button type="button" class="btn btn-primary btn-lg" onClick = {this.post.bind(this, tmp)}> Publish </button>
      </div>
    );
  }
}

export default RichEditor;