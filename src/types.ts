type ProgramInfo = {
    program: WebGLProgram;
    attribLocations: { vertexPosition: number,  };
    uniformLocations: { resolution: WebGLUniformLocation, }
}

type Buffers = { position: WebGLBuffer};

export type { ProgramInfo, Buffers };