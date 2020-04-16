/*import { Textures, Scene, World } from "../constants";

class Menu_Button extends PIXI.Sprite
{
	constructor(scene, x, y, text = "", action = () => { }) 
    {
        const resource = PIXI.Loader.shared.resources[Textures.MenuIdle];
        const texture = resource.textures!["menu_button_idle.png"];
        super(scene, x, y, texture);
        scene.add.existing(this);
        //this.text = scene.add.text(x, y, text, {fontFamily: 'monospace', fontStyle: 'bold', color: '#ffffff', align: 'center' });
        //this.action = action;
        //this.setOrigin(0.5, 0.7);
        this.idle();
    }

    update()
    {
    	this.text.setPosition(this.x, this.y);
    	this.text.setAlpha(this.alpha);
    	this.text.setScale(this.scaleX, this.scaleY);
    }


    focus()
    {
    	this.setTexture("button_focus");
        this.text.setFontSize(17).setOrigin(0.5, 0.65);
    }

    idle()
    {
    	this.setTexture("button_idle");
        this.text.setFontSize(11).setOrigin(0.5, 0.75);
    }
}
*/