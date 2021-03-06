#!/usr/bin/env node
'use strict';

const zt = require('ztype');

class ZUpload{
	get d(){ return this.disposition; }
	get f(){ return this.field; }
	get h(){ return this.headers; }
	get n(){ return this.name; }
	get p(){ return this.path; }
	get s(){ return this.size; }
	get t(){ return this.type; }

	get disposition(){ return this.contentDisposition; }
	get field(){ return this.fieldName; }
	get name(){ return this.fileName; }
	get path(){ return this.filePath; }
	get size(){ return this.fileSize; }
	get type(){ return this.contentType; }

	get contentDisposition(){ return this._contentDisposition; }
	get contentType(){ return this._contentType; }
	get fieldName(){ return this._fieldName; }
	get fileName(){ return this._fileName; }
	get filePath(){ return this._filePath; }
	get fileSize(){ return this._fileSize; }
	get headers(){ return this._headers; }

	constructor(file){
		const F = zt.al(file, { o: file, else: {} });
		const H = zt.al(f.headers, { o: F.headers, else: {} });
		this._contentDisposition = H['content-disposition'];
		this._contentType = H['content-type'];
		this._fieldName = F.fieldName;
		this._fileName = F.originalFilename;
		this._filePath = F.path;
		this._fileSize = F.size;
		this._headers = Object.assign({}, H);
		Object.freeze(this);
	}
};

module.exports = ZUpload;
