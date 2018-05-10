import React from 'react'
import ToggleMounting from './components/ToggleMounting'
import Uploader from './components/Uploader'

const App = () => (
  <React.Fragment>
    <h1>Demo of Uploadcare Widget in React app</h1>
    <ToggleMounting title='Demo'>
      <p>
        <label htmlFor='file'>Your file:</label>{' '}
        <Uploader
          id='file'
          name='file'
          onChange={(file) => {
            console.log('File changed: ', file)

            if (file) {
              file.progress(info => console.log('File progress: ', info.progress))
              file.done(info => console.log('File uploaded: ', info))
            }
          }}
          onUploadComplete={info => console.log('Upload completed:', info)}/>
      </p>
      <p>
        <label htmlFor='images'>Your images:</label>{' '}
        <Uploader id='images' name='images' data-images-only data-multiple />
      </p>
      <p>
        <label htmlFor='images'>Predefined image:</label>{' '}
        <Uploader
          id='image'
          name='image'
          value='https://ucarecdn.com/e7e46bb5-685b-45bf-abc6-1dfbcfb10fec/example.jpg'
          data-images-only />
      </p>
    </ToggleMounting>
  </React.Fragment>
)

export default App
