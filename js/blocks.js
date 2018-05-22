
/**
 * @fileoverview Control blocks for Scratch (Horizontal)
 * @author ascii@media.mit.edu <Andrew Sliwinski>
 */
'use strict';

goog.provide('Blockly.Blocks.event');

goog.require('Blockly.Blocks');

goog.require('Blockly.Colours');

<!-- 程序 start -->
Blockly.Blocks['test_start'] = {
  /**
   * Block for repeat n times (external number).
   * https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#so57n9
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "test_start",
      "message0": "%1",
      "args0": [{
                  "type": "field_image",
                  "src": Blockly.mainWorkspace.options.pathToMedia + "icons/control_wait.svg",
                  "width": 40,
                  "height": 40,
                  "alt": "Wait"
      }],
      "inputsInline": true,
      "nextStatement": null,
      "category": Blockly.Categories.control,
      "colour": Blockly.Colours.control.primary,
      "colourSecondary": Blockly.Colours.control.secondary,
      "colourTertiary": Blockly.Colours.control.tertiary
    });
  }
};

Blockly.Blocks['test_end'] = {
  /**
   * Block for stop all scripts.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "test_end",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/control_stop.svg",
          "width": 40,
          "height": 40,
          "alt": "Stop"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "category": Blockly.Categories.control,
      "colour": Blockly.Colours.control.primary,
      "colourSecondary": Blockly.Colours.control.secondary,
      "colourTertiary": Blockly.Colours.control.tertiary
    });
  }
};

Blockly.Blocks['control_forever'] = {
  /**
   * Block for repeat n times (external number).
   * https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#5eke39
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "control_forever",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        },
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/control_forever.svg",
          "width": 40,
          "height": 40,
          "alt": "*",
          "flip_rtl": true
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "category": Blockly.Categories.control,
      "colour": Blockly.Colours.control.primary,
      "colourSecondary": Blockly.Colours.control.secondary,
      "colourTertiary": Blockly.Colours.control.tertiary
    });
  }
};

Blockly.Blocks['control_repeat'] = {
  /**
   * Block for repeat n times (external number).
   * https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#so57n9
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "control_repeat",
      "message0": "%1 %2 %3",
      "args0": [{
          "type": "input_statement",
          "name": "SUBSTACK"
        },
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/control_repeat.svg",
          "width": 40,
          "height": 40,
          "alt": "*",
          "flip_rtl": true
        },{
          "type": "input_value",
          "name": "NUM",
          "check": "Number"
        }
        ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.control,
      "colour": Blockly.Colours.control.primary,
      "colourSecondary": Blockly.Colours.control.secondary,
      "colourTertiary": Blockly.Colours.control.tertiary
    });
  }
};

Blockly.Blocks['control_delay'] = {
  /**
   * Block for repeat n times (external number).
   * https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#so57n9
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "control_delay",
      "message0": "%1 %2 %3",
      "args0": [{
          "type": "input_statement",
          "name": "SUBSTACK"
        },
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/control_wait.svg",
          "width": 40,
          "height": 40,
          "alt": "*",
          "flip_rtl": true
        },{
          "type": "input_value",
          "name": "NUM",
          "check": "Number"
        }
        ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.control,
      "colour": Blockly.Colours.control.primary,
      "colourSecondary": Blockly.Colours.control.secondary,
      "colourTertiary": Blockly.Colours.control.tertiary
    });
  }
};

Blockly.Blocks['test_while'] = {
  /**
   * Block for repeat n times (external number).
   * https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#so57n9
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "test_while",
      "message0": "%1 %2",
      "args0": [{
          "type": "input_statement",
          "name": "SUBSTACK"
        },
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/control_wait.svg",
          "width": 40,
          "height": 40,
          "alt": "*",
          "flip_rtl": true
        }],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.control,
      "colour": Blockly.Colours.control.primary,
      "colourSecondary": Blockly.Colours.control.secondary,
      "colourTertiary": Blockly.Colours.control.tertiary
    });
  }
};
Blockly.Blocks['test_end_while'] = {
  /**
   * Block for stop all scripts.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "test_end_while",
      "message0": "%1",
      "args0": [
        {
          "type": "field_input",
          "text":"ENDWHILE"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.control,
      "colour": Blockly.Colours.control.primary,
      "colourSecondary": Blockly.Colours.control.secondary,
      "colourTertiary": Blockly.Colours.control.tertiary
    });
  }
};

<!-- 程序 end -->

<!-- 传感器 start -->

Blockly.Blocks['dropdown_whenbroadcast'] = {
    /**
   * Block for when broadcast dropdown (used for shadow).
   * @this Blockly.Block
   */
    init: function() {
        this.appendDummyInput().appendField(new Blockly.FieldIconMenu([{
            src: Blockly.mainWorkspace.options.pathToMedia + 'icons/event_when-broadcast-received_blue.svg',
            value: 'blue',
            width: 48,
            height: 48,
            alt: 'Blue'
        }, {
            src: Blockly.mainWorkspace.options.pathToMedia + 'icons/event_when-broadcast-received_green.svg',
            value: 'green',
            width: 48,
            height: 48,
            alt: 'Green'
        }, {
            src: Blockly.mainWorkspace.options.pathToMedia + 'icons/event_when-broadcast-received_coral.svg',
            value: 'coral',
            width: 48,
            height: 48,
            alt: 'Coral'
        }, {
            src: Blockly.mainWorkspace.options.pathToMedia + 'icons/event_when-broadcast-received_magenta.svg',
            value: 'magenta',
            width: 48,
            height: 48,
            alt: 'Magenta'
        }, {
            src: Blockly.mainWorkspace.options.pathToMedia + 'icons/event_when-broadcast-received_orange.svg',
            value: 'orange',
            width: 48,
            height: 48,
            alt: 'Orange'
        }, {
            src: Blockly.mainWorkspace.options.pathToMedia + 'icons/event_when-broadcast-received_purple.svg',
            value: 'purple',
            width: 48,
            height: 48,
            alt: 'Purple'
        }]), 'CHOICE');
        this.setOutput(true);
        this.setColour(Blockly.Colours.event.primary, Blockly.Colours.event.secondary, Blockly.Colours.event.tertiary);
    }
};

Blockly.Blocks['test_button'] = {
  /**
   * Block to wait (pause) stack.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "test_button",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/control_wait.svg",
          "width": 40,
          "height": 40,
          "alt": "Wait"
        },
        {
          "type": "input_value",
          "name": "NUM",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.control,
      "colour": Blockly.Colours.control.primary,
      "colourSecondary": Blockly.Colours.control.secondary,
      "colourTertiary": Blockly.Colours.control.tertiary
    });
  }
};

Blockly.Blocks['test_circle_dir'] = {
    /**
   * Block for when broadcast received.
   * @this Blockly.Block
   */
    init: function() {
        this.jsonInit({
            "id": "test_circle",
            "message0": "%1 %2 ",
            "args0": [{
                "type": "field_image",
                "src": Blockly.mainWorkspace.options.pathToMedia + "icons/event_when-broadcast-received_blue.svg",
                "width": 40,
                "height": 40,
                "alt": "Broadcast received",
            },{
                    "type": "input_value",
                    "name": "CHOICE",
                    "flip_rtl": true
            }],
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "category": Blockly.Categories.event,
            "colour": Blockly.Colours.event.primary,
            "colourSecondary": Blockly.Colours.event.secondary,
            "colourTertiary": Blockly.Colours.event.tertiary
        });
    }
};
Blockly.Blocks['test_circle_angle'] = {
    /**
   * Block for when broadcast received.
   * @this Blockly.Block
   */
    init: function() {
        this.jsonInit({
            "id": "test_circle",
            "message0": "%1 %2",
            "args0": [{
                "type": "field_image",
                "src": Blockly.mainWorkspace.options.pathToMedia + "icons/event_when-broadcast-received_blue.svg",
                "width": 40,
                "height": 40,
                "alt": "Broadcast received",
            },{
              "type": "input_value",
              "name": "NUM",
              "check": "Number"
            }],
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "category": Blockly.Categories.event,
            "colour": Blockly.Colours.event.primary,
            "colourSecondary": Blockly.Colours.event.secondary,
            "colourTertiary": Blockly.Colours.event.tertiary
        });
    }
};

Blockly.Blocks['test_speek'] = {
  /**
   * Block to wait (pause) stack.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "test_speek",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/control_wait.svg",
          "width": 40,
          "height": 40,
          "alt": "Wait"
        },
        {
          "type": "input_value",
          "name": "NUM",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.control,
      "colour": Blockly.Colours.control.primary,
      "colourSecondary": Blockly.Colours.control.secondary,
      "colourTertiary": Blockly.Colours.control.tertiary
    });
  }
};
/** 红外测距 */
Blockly.Blocks['test_distance'] = {
    /**
   * Block for when broadcast received.
   * @this Blockly.Block
   */
    init: function() {
        this.jsonInit({
            "id": "test_circle",
            "message0": "%1 %2",
            "args0": [{
                "type": "field_image",
                "src": Blockly.mainWorkspace.options.pathToMedia + "icons/event_when-broadcast-received_blue.svg",
                "width": 40,
                "height": 40,
                "alt": "Broadcast received",
            },{
                    "type": "input_value",
                    "name": "CHOICE",
                    "flip_rtl": true
            }],
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "category": Blockly.Categories.event,
            "colour": Blockly.Colours.event.primary,
            "colourSecondary": Blockly.Colours.event.secondary,
            "colourTertiary": Blockly.Colours.event.tertiary
        });
    }
};
/** 陀螺仪 */
Blockly.Blocks['test_gyro'] = {
    /**
   * Block for when broadcast received.
   * @this Blockly.Block
   */
    init: function() {
        this.jsonInit({
            "id": "test_gyro",
            "message0": "%1 %2",
            "args0": [{
                "type": "field_image",
                "src": Blockly.mainWorkspace.options.pathToMedia + "icons/event_when-broadcast-received_blue.svg",
                "width": 40,
                "height": 40,
                "alt": "Broadcast received",
            },{
                    "type": "input_value",
                    "name": "CHOICE",
                    "flip_rtl": true
            }],
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "category": Blockly.Categories.event,
            "colour": Blockly.Colours.event.primary,
            "colourSecondary": Blockly.Colours.event.secondary,
            "colourTertiary": Blockly.Colours.event.tertiary
        });
    }
};
<!-- 传感器 end -->

<!-- 电机 start -->
Blockly.Blocks['test_driven'] = {
  /**
   * Block for stop all scripts.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "test_driven",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/control_stop.svg",
          "width": 40,
          "height": 40,
          "alt": "Stop"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.control,
      "colour": Blockly.Colours.control.primary,
      "colourSecondary": Blockly.Colours.control.secondary,
      "colourTertiary": Blockly.Colours.control.tertiary
    });
  }
};
Blockly.Blocks['test_driven_speed'] = {
  /**
   * Block for stop all scripts.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "test_driven_speed",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/control_stop.svg",
          "width": 40,
          "height": 40,
          "alt": "Stop"
        },
        {
          "type": "input_value",
          "name": "NUM",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.control,
      "colour": Blockly.Colours.control.primary,
      "colourSecondary": Blockly.Colours.control.secondary,
      "colourTertiary": Blockly.Colours.control.tertiary
    });
  }
};
Blockly.Blocks['test_driven_forward'] = {
  /**
   * Block for stop all scripts.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "test_driven_forward",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/control_stop.svg",
          "width": 40,
          "height": 40,
          "alt": "Stop"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.control,
      "colour": Blockly.Colours.control.primary,
      "colourSecondary": Blockly.Colours.control.secondary,
      "colourTertiary": Blockly.Colours.control.tertiary
    });
  }
};
Blockly.Blocks['test_driven_reverse'] = {
  /**
   * Block for stop all scripts.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "test_driven_reverse",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/control_stop.svg",
          "width": 40,
          "height": 40,
          "alt": "Stop"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.control,
      "colour": Blockly.Colours.control.primary,
      "colourSecondary": Blockly.Colours.control.secondary,
      "colourTertiary": Blockly.Colours.control.tertiary
    });
  }
};
<!-- 电机 end -->

<!-- 数学 start -->
Blockly.Blocks['test_number'] = {
  /**
   * Block for stop all scripts.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "test_number",
      "message0": "%1",
      "args0": [
                {
                  "type": "input_value",
                  "name": "NUM",
                  "check": "Number"
                }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.control,
      "colour": Blockly.Colours.control.primary,
      "colourSecondary": Blockly.Colours.control.secondary,
      "colourTertiary": Blockly.Colours.control.tertiary
    });
  }
};
<!-- 数学 end -->

<!-- 音乐 start -->
Blockly.Blocks['test_voice'] = {
    /**
   * Block for when broadcast received.
   * @this Blockly.Block
   */
    init: function() {
        this.jsonInit({
            "id": "test_voice",
            "message0": "%1 %2",
            "args0": [{
                "type": "field_image",
                "src": Blockly.mainWorkspace.options.pathToMedia + "icons/event_when-broadcast-received_blue.svg",
                "width": 40,
                "height": 40,
                "alt": "Broadcast received",
            },{
                    "type": "input_value",
                    "name": "CHOICE",
                    "flip_rtl": true
            }],
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "category": Blockly.Categories.event,
            "colour": Blockly.Colours.event.primary,
            "colourSecondary": Blockly.Colours.event.secondary,
            "colourTertiary": Blockly.Colours.event.tertiary
        });
    }
};
<!-- 音乐 end -->

<!-- 显示 start -->
<!--文字-->
Blockly.Blocks['test_tv_text'] = {
    /**
   * Block for when broadcast received.
   * @this Blockly.Block
   */
    init: function() {
        this.jsonInit({
            "id": "test_tv",
            "message0": "%1 %2",
            "args0": [{
                "type": "field_image",
                "src": Blockly.mainWorkspace.options.pathToMedia + "icons/event_when-broadcast-received_blue.svg",
                "width": 40,
                "height": 40,
                "alt": "Broadcast received",
            },{
                    "type": "input_value",
                    "name": "TEXT",
            }],
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "category": Blockly.Categories.event,
            "colour": Blockly.Colours.event.primary,
            "colourSecondary": Blockly.Colours.event.secondary,
            "colourTertiary": Blockly.Colours.event.tertiary
        });
    }
};
<!--表情-->
Blockly.Blocks['test_tv_face'] = {
    /**
   * Block for when broadcast received.
   * @this Blockly.Block
   */
    init: function() {
        this.jsonInit({
            "id": "test_tv",
            "message0": "%1 %2",
            "args0": [{
                "type": "field_image",
                "src": Blockly.mainWorkspace.options.pathToMedia + "icons/event_when-broadcast-received_blue.svg",
                "width": 40,
                "height": 40,
                "alt": "Broadcast received",
            },{
                    "type": "input_value",
                    "name": "CHOICE",
                    "flip_rtl": true
            }],
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "category": Blockly.Categories.event,
            "colour": Blockly.Colours.event.primary,
            "colourSecondary": Blockly.Colours.event.secondary,
            "colourTertiary": Blockly.Colours.event.tertiary
        });
    }
};
<!-- 显示 end -->

<!-- 灯 start -->

// 灯的亮度
Blockly.Blocks['test_led_high'] = {
    /**
   * Block for when broadcast received.
   * @this Blockly.Block
   */
    init: function() {
        this.jsonInit({
            "id": "test_led_high",
            "message0": "%1 %2",
            "args0": [{
                "type": "field_image",
                "src": Blockly.mainWorkspace.options.pathToMedia + "icons/event_when-broadcast-received_blue.svg",
                "width": 40,
                "height": 40,
                "alt": "Broadcast received",
            },{
                    "type": "input_value",
                    "name": "CHOICE",
                    "flip_rtl": true
            }],
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "category": Blockly.Categories.event,
            "colour": Blockly.Colours.event.primary,
            "colourSecondary": Blockly.Colours.event.secondary,
            "colourTertiary": Blockly.Colours.event.tertiary
        });
    }
};
// 灯的颜色
Blockly.Blocks['dropdown_test_led_high'] = {
  /**
   * Block for set color drop-down (used for shadow).
   * @this Blockly.Block
   */
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldIconMenu([
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/set-led_red.svg',
              value: 'red', width: 48, height: 48, alt: 'Mystery'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/set-led_yellow.svg',
              value: 'yellow', width: 48, height: 48, alt: 'Yellow'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/set-led_orange.svg',
            value: 'orange', width: 48, height: 48, alt: 'Orange'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/set-led_coral.svg',
            value: 'coral', width: 48, height: 48, alt: 'Coral'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/set-led_magenta.svg',
            value: 'magenta', width: 48, height: 48, alt: 'Magenta'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/set-led_purple.svg',
            value: 'purple', width: 48, height: 48, alt: 'Purple'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/set-led_blue.svg',
            value: 'blue', width: 48, height: 48, alt: 'Blue'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/set-led_green.svg',
            value: 'green', width: 48, height: 48, alt: 'Green'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/set-led_white.svg',
              value: 'white', width: 48, height: 48, alt: 'White'}
        ]), 'CHOICE');
    this.setOutput(true);
    this.setColour(Blockly.Colours.looks.primary,
      Blockly.Colours.looks.secondary,
      Blockly.Colours.looks.tertiary
    );
  }
};
Blockly.Blocks['test_led_high'] = {
    /**
   * Block for when broadcast received.
   * @this Blockly.Block
   */
    init: function() {
        this.jsonInit({
              "id": "test_led_high",
              "message0": "%1 %2",
              "args0": [{
              "type": "field_image",
              "src": Blockly.mainWorkspace.options.pathToMedia + "icons/set-led_blue.svg",
              "width": 40,
              "height": 40,
              "alt": "Set LED Color"
            },
            {
              "type": "input_value",
              "name": "CHOICE"
            }],
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "category": Blockly.Categories.event,
            "colour": Blockly.Colours.event.primary,
            "colourSecondary": Blockly.Colours.event.secondary,
            "colourTertiary": Blockly.Colours.event.tertiary
        });
    }
};
<!-- 灯 end -->