//#pragma glslify: hsl2rgb = require('glsl-hsl2rgb');
//#pragma glslify: ease = require('glsl-easings/back-in-out');
precision highp float;
varying vec2 vUv;
uniform float time;
void main () {
//	gl_FragColor = vec4(vUv.xy, 1.0, 0.5);
//	gl_FragColor = vec4(0.188,0.75,0.52,1.0);
	vec3 colorA = vec3(241.0/360.0, 0.1, 0.84);
	gl_FragColor = vec4(colorA,1.0);
}
