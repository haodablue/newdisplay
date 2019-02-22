//% weight=2 color=#002050 icon="\uf00a"
//% advanced=true

namespace newdisplay {
    /**
     * Print a line of text to the serial port
     * @param value to send over serial
     */
    let buf = control.createBuffer(32);
    //% help=serial/write-buff
    //% weight=86
    //% blockId=serial_writexy block="xs|write xy x %x=1 | y %y=1 "
    export function write_xy(x: number,y:number): void {
        //if (!values) return;
        let temp=0;
		let zz=0;

		/*buf[0]=0x78;
		buf[1]=0x73;
		buf[2]=0x3A;
        
		buf[30]=0x0d;buf[31]=0x0a;	*/
		if(x<1||y<1||x>11||y>11)return;

		if(y>8){

			//buf[2+x]|=(0x01<<(y-8));
	       //buf[x*2+1+1]=255;
		    zz=(1<<(y-9));
			temp=buf[x*2+1+1];
		   
		     buf[x*2+1+1]=temp|zz;
		   
	
		}else{
		 //buf[2+x]|=(0x01<<(y-1));
		//buf[x*2+1]=255;
		zz=(1<<(y-1));
			temp=buf[x*2+1];
		   
		     buf[x*2+1]=temp|zz;
		}
    }
	
    //% help=serial/write-clear
    //% weight=86
    //% blockId=serial_writeclear block="xs|clear buff "
    export function writeclear(): void {
        //if (!values) return;

		buf[0]=0x78;
		buf[1]=0x73;
		buf[2]=0x3A;
        for (let i = 3; i < 29; ++i)
          buf[i] = 0;
		buf[30]=0x0d;buf[31]=0x0a;

    }
	
	//% help=serial/write-buff
    //% weight=86
    //% blockId=serial_writebuff block="xs|write buff "
    export function writeBuff(): void {
        //if (!values) return;

		buf[0]=0x78;
		buf[1]=0x73;
		buf[2]=0x3A;
        //for (let i = 3; i < values.length+3; ++i)
         //   buf[i] = values[i-3]
		buf[30]=0x0d;buf[31]=0x0a;
		serial.writeBuffer(buf);
    }





}
    
