const  glsl = require('glslify');
const  canvasSketch = require('canvas-sketch');
const  shader = require('canvas-sketch-util/shader');



const  settings = {
     context: 'webgl',
     animate: true,
}

import frag from '../shaders/fragment.glsl';
import vert from '../shaders/vertex.glsl';



const  sketch = ({ gl}) => {
     return shader({
          gl,
          frag,
          vert,
          uniforms:{
               time:({time}) => time
          }
     })
}

canvasSketch(sketch,settings)
