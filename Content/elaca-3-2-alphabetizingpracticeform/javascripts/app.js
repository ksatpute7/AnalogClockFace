(function (/*! Brunch !*/) {
    'use strict';

    var globals = typeof window !== 'undefined' ? window : global;
    if (typeof globals.require === 'function') return;

    var modules = {};
    var cache = {};

    var has = function (object, name) {
        return ({}).hasOwnProperty.call(object, name);
    };

    var expand = function (root, name) {
        var results = [], parts, part;
        if (/^\.\.?(\/|$)/.test(name)) {
            parts = [root, name].join('/').split('/');
        } else {
            parts = name.split('/');
        }
        for (var i = 0, length = parts.length; i < length; i++) {
            part = parts[i];
            if (part === '..') {
                results.pop();
            } else if (part !== '.' && part !== '') {
                results.push(part);
            }
        }
        return results.join('/');
    };

    var dirname = function (path) {
        return path.split('/').slice(0, -1).join('/');
    };

    var localRequire = function (path) {
        return function (name) {
            var dir = dirname(path);
            var absolute = expand(dir, name);
            return globals.require(absolute);
        };
    };

    var initModule = function (name, definition) {
        var module = { id: name, exports: {} };
        definition(module.exports, localRequire(name), module);
        var exports = cache[name] = module.exports;
        return exports;
    };

    var require = function (name) {
        var path = expand(name, '.');

        if (has(cache, path)) return cache[path];
        if (has(modules, path)) return initModule(path, modules[path]);

        var dirIndex = expand(path, './index');
        if (has(cache, dirIndex)) return cache[dirIndex];
        if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

        throw new Error('Cannot find module "' + name + '"');
    };

    var define = function (bundle, fn) {
        if (typeof bundle === 'object') {
            for (var key in bundle) {
                if (has(bundle, key)) {
                    modules[key] = bundle[key];
                }
            }
        } else {
            modules[bundle] = fn;
        }
    };

    globals.require = require;
    globals.require.define = define;
    globals.require.register = define;
    globals.require.brunch = true;
})();

window.require.register("application", function (exports, require, module) {
    var Application, Core, _ref,
      __hasProp = {}.hasOwnProperty,
      __extends = function (child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

    Core = require('core');

    module.exports = Application = (function (_super) {
        __extends(Application, _super);

        function Application() {
            _ref = Application.__super__.constructor.apply(this, arguments);
            return _ref;
        }

        return Application;

    })(Core.Application);

});
window.require.register("engines/form/index", function (exports, require, module) {
    /*
    Form Engine
    */

    var Core, Form, FormModel, FormView, _ref,
      __hasProp = {}.hasOwnProperty,
      __extends = function (child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

    Core = require('core');

    FormView = require('engines/form/views/view');

    FormModel = require('engines/form/models/model');

    module.exports = Form = (function (_super) {
        __extends(Form, _super);

        function Form() {
            _ref = Form.__super__.constructor.apply(this, arguments);
            return _ref;
        }

        Form.prototype.initialize = function (payload) {
            Form.__super__.initialize.apply(this, arguments);
            this.model = new FormModel(payload);
            this.view = new FormView({
                model: this.model
            });
            return this;
        };

        return Form;

    })(Core.Engine);

});
window.require.register("engines/form/models/fieldset-collection", function (exports, require, module) {
    var Core, FieldsetCollection, FieldsetModel, _ref,
      __hasProp = {}.hasOwnProperty,
      __extends = function (child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

    Core = require('core');

    FieldsetModel = require('engines/form/models/fieldset');

    module.exports = FieldsetCollection = (function (_super) {
        __extends(FieldsetCollection, _super);

        function FieldsetCollection() {
            _ref = FieldsetCollection.__super__.constructor.apply(this, arguments);
            return _ref;
        }

        FieldsetCollection.prototype.model = FieldsetModel;

        return FieldsetCollection;

    })(Core.Collection);

});
window.require.register("engines/form/models/fieldset", function (exports, require, module) {
    var Core, FieldsetModel, _ref,
      __hasProp = {}.hasOwnProperty,
      __extends = function (child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

    Core = require('core');

    module.exports = FieldsetModel = (function (_super) {
        __extends(FieldsetModel, _super);

        function FieldsetModel() {
            _ref = FieldsetModel.__super__.constructor.apply(this, arguments);
            return _ref;
        }

        return FieldsetModel;

    })(Core.Model);

});
window.require.register("engines/form/models/model", function (exports, require, module) {
    var Core, FormModel, _ref,
      __hasProp = {}.hasOwnProperty,
      __extends = function (child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

    Core = require('core');

    module.exports = FormModel = (function (_super) {
        __extends(FormModel, _super);

        function FormModel() {
            _ref = FormModel.__super__.constructor.apply(this, arguments);
            return _ref;
        }

        FormModel.prototype.save = function () {
            return this.toJSON();
        };

        FormModel.prototype.initialize = function () {
            FormModel.__super__.initialize.apply(this, arguments);
            return this.subscribeEvent('!engine:formChange', this.saveSerializedData);
        };

        FormModel.prototype.saveSerializedData = function (data) {
            return this.set('serialized', data);
        };

        return FormModel;

    })(Core.EngineModel);

});
window.require.register("engines/form/views/fieldset-collection", function (exports, require, module) {
    var Core, FieldsetCollectionView, FieldsetView, template, _ref,
      __bind = function (fn, me) { return function () { return fn.apply(me, arguments); }; },
      __hasProp = {}.hasOwnProperty,
      __extends = function (child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

    Core = require('core');

    FieldsetView = require('engines/form/views/fieldset');

    template = require('engines/form/views/templates/fieldset-collection');

    module.exports = FieldsetCollectionView = (function (_super) {
        __extends(FieldsetCollectionView, _super);

        function FieldsetCollectionView() {
            this.serializeContentEditable = __bind(this.serializeContentEditable, this);
            this.publishData = __bind(this.publishData, this);
            _ref = FieldsetCollectionView.__super__.constructor.apply(this, arguments);
            return _ref;
        }

        FieldsetCollectionView.prototype.autoRender = true;

        FieldsetCollectionView.prototype.className = 'content-container';

        FieldsetCollectionView.prototype.tagName = 'form';

        FieldsetCollectionView.prototype.itemView = FieldsetView;

        FieldsetCollectionView.prototype.template = template;

        template = null;

        FieldsetCollectionView.prototype.attach = function () {
            FieldsetCollectionView.__super__.attach.apply(this, arguments);
            return this.$el.on('input change', _.throttle(this.publishData, 100));
        };

        FieldsetCollectionView.prototype.publishData = function () {
            var data;
            data = this.$el.serializeArray().concat(this.serializeContentEditable());
            return this.publishEvent('!engine:formChange', data);
        };

        /*
          serializeArray only captures form elements. We also need to capture
          items in contenteditable, this method will do that for us
        */


        FieldsetCollectionView.prototype.serializeContentEditable = function () {
            var results,
              _this = this;
            results = [];
            _.each(this.$el.find('[contenteditable]'), function (field) {
                return results.push({
                    name: $(field).attr('name'),
                    value: $(field).text()
                });
            });
            return results;
        };

        return FieldsetCollectionView;

    })(Core.CollectionView);

});
window.require.register("engines/form/views/fieldset", function (exports, require, module) {
    var Core, FieldsetView, template, _ref,
      __hasProp = {}.hasOwnProperty,
      __extends = function (child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

    Core = require('core');

    template = require('engines/form/views/templates/fieldset');

    module.exports = FieldsetView = (function (_super) {
        __extends(FieldsetView, _super);

        function FieldsetView() {
            _ref = FieldsetView.__super__.constructor.apply(this, arguments);
            return _ref;
        }

        FieldsetView.prototype.className = function () {
            return 'content ' + this.model.get('className');
        };

        FieldsetView.prototype.tagName = 'fieldset';

        FieldsetView.prototype.template = template;

        template = null;

        FieldsetView.prototype.events = {
            'click #add-row': function addRow(event) {
                console.debug('Add row clicked.');
                // clicking buttons triggers the forms reload, so we want to stop that
                event.preventDefault();

                var textAreaField = {
                    "name": "1-0",
                    "attr": {
                        "name": "1-0",
                        "class": "contenteditable"
                    },
                    "tagName": "textarea"
                };

                var content = this.model.get('content');
                var fields = this.model.get('fields');
                var rowIdentifier = Math.round(Math.random() * 100000000000);
                // copy the last row of the content string for reference
                // do not copy events
                var contentRow = $('tbody tr:last-child', content).clone(false);
                var re = new RegExp('[0-9]+-[0-9]+');
                $('td', contentRow).each(function (index, element) {


                    element = $(element);
                    var newFieldName, newField = {};
                    newFieldName = (rowIdentifier) + '-' + index;
                    var cellContents = element.html();
                    var oldFieldName = cellContents.match(re);
                    if (oldFieldName) {
                        oldFieldName = oldFieldName[0];
                        var templateField = fields[oldFieldName];
                        $.extend(true, newField, templateField);
                    } else {
                        newField = textAreaField;
                    }


                    if (newField.tagName === 'input') {
                        newField.attr.name = rowIdentifier.toString();
                    } else {
                        newField.attr.name = newFieldName;
                    }


                    newField.name = newFieldName;
                    fields[newFieldName] = newField;
                    element.html('{{' + newFieldName + '}}');
                });
                contentRow.addClass('added');
                contentRow.attr('id', rowIdentifier);
                $('td', contentRow).first().prepend("<div class='btn-delete-row'>x</div>").wrapInner("<div class='delete-button-wrapper'></div>");
                var contentAsjQueryElement = $(content);
                $('tbody', contentAsjQueryElement).append(contentRow);
                content = contentAsjQueryElement.wrapAll('<div></div>').parent().html();
                // set the content template in anticipation of rerendering this view
                this.model.set('content', content);
                var pageModel = App.pages.getCurrentPage();

                // explicitly set the content off the pageModel because that's where the save data comes from
                pageModel.attributes.engine.payload.fieldsets[0].content = content;
                this.publishEvent("#willClose");
                this.render();
                this.publishEvent("#rowAdded"); console.debug('addRow complete.');
				resizeTable();
            },
            'click .btn-delete-row': function deleteRow(event) {
                var currentRow = $(event.target).parents('tr');
                var that = this;
                function removeRow(targetRow) {
                    var id = targetRow.attr('id');
                    var content = that.model.get('content');
                    var jqContent = $(content);
                    jqContent.find('#' + id).remove();
                    var contentString = jqContent.wrapAll('<div></div>').parent().html();
                    that._saveContent(contentString);
                    targetRow.remove();
                    // clear serialized data
                    var data = that.$el.serializeArray();
                    that.publishEvent('!engine:formChange', data);
					resizeTable();
                }

                var confirmationBox = "<div id='confirmation-overlay' class='confirmation'></div><div id='confirmation-box' class='confirmation'><h2>Would you like to delete this row?</h2><button id='confirm-delete'>Delete</button><button id='dismiss-confirmation'>Cancel</button></div>";
                $(confirmationBox).appendTo('body');
                $('#dismiss-confirmation').click(function() {
                    $('.confirmation').remove();
                });
                $('#confirm-delete').click(function() {
                    removeRow(currentRow);
                    $('.confirmation').remove();
                });
            }
        };

        FieldsetView.prototype._saveContent = function(contentString) {
            this.model.set('content', contentString);
            var pageModel = App.pages.getCurrentPage();

            // explicitly set the content off the pageModel because that's where the save data comes from
            pageModel.attributes.engine.payload.fieldsets[0].content = contentString;
        }

        FieldsetView.prototype.getTemplateData = function () {
            var content,
              _this = this;
            content = this.model.get('content');
            content = content.replace(/\{\{([a-zA-Z0-9-_]+)\}\}/gi, function (a, b) {
                var $el, field, fraction;
                field = _this.model.get('fields')[b];
                field.label = field.label || '';
                field.attr.type = field.attr.type || '';
                field.attr.id = 'field-' + b;
                switch (field.tagName) {
                    case 'textarea':
                        $el = $('<textarea>').attr(field.attr);
                        $el.html(field.content);
                        break;
                    case 'select':
                        $el = $('<select>').attr(field.attr);
                        _.each(field.options, function (option) {
                            return $el.append($('<option>').attr(option.attr).html(option.content));
                        });
                        break;
                    case 'fmath':
                        fraction = M(field.attr.content);
                        $el = $('<div>');
                        $el.append(fraction);
                        break;
                    default:
                        $el = $('<label class="field-' + field.attr.type + ' ' + field.className + '-' + field.attr.type + '" for="' + field.attr.id + '">' + field.label + '</label>').append($('<' + field.tagName + '>').attr(field.attr));
                }
                return $('<div>').append($el.clone()).html();
            });
            return {
                legend: this.model.get('legend'),
                // content used to be processed through markdown
                // now the form builder generates html directly
                content: content,
                rowAddable: this.model.get('rowAddable')
            };
        };


        FieldsetView.prototype.attach = function () {
            var wrap;
            FieldsetView.__super__.attach.apply(this, arguments);
            this.$(':radio').click(function (event) {
                var $this = $(this);
                var wasSelected = $this.parent('label').hasClass('selected');
                // clear all existing selections
                $this.parents('tr').find('label.field-radio').removeClass('selected');

                // deselect logic
                if (wasSelected) {

                    // WebKit will reselect the radio button even if preventDefault is called
                    // http://www.quirksmode.org/dom/events/click.html#t010
                    // I hop god can forgive me for this hack
                    setTimeout(function() {
                        $this.prop('checked', false);
                        $this.change();
                    }, 0);
                    
                    return;
                }
                $this.parent('label').addClass('selected');                    
            }).filter(':checked').change();
            this.$(':checkbox').change(function () {
                return ($(this).parent('label').hasClass('selected')) ? $(this).parent('label').removeClass('selected') : $(this).parent('label').addClass('selected');
            }).filter(':checked').change();
            if (this.$('select').length > 0) {
                wrap = '<label for="' + this.$('select').attr('name') + '" class="custom-select" />';
                this.$('select').wrap(wrap);
                return this.$('.custom-select').append('<i class="icon-caret-down"/>');
            }
        };

        return FieldsetView;

    })(Core.View);

});
window.require.register("engines/form/views/templates/fieldset-collection", function (exports, require, module) {
    module.exports = Handlebars.template(function (Handlebars, depth0, helpers, partials, data) {
        helpers = helpers || Handlebars.helpers;
        var buffer = "";


        return buffer;
    });
});
window.require.register("engines/form/views/templates/fieldset", function (exports, require, module) {
    module.exports = Handlebars.template(function (Handlebars, depth0, helpers, partials, data) {
        helpers = helpers || Handlebars.helpers;
        var buffer = "", stack1, foundHelper, functionType = "function";


        buffer += "<legend>\n  ";
        foundHelper = helpers.legend;
        if (foundHelper) { stack1 = foundHelper.call(depth0, { hash: {} }); }
        else { stack1 = depth0.legend; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
        if (stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n</legend>\n";
        foundHelper = helpers.content;
        if (foundHelper) { stack1 = foundHelper.call(depth0, { hash: {} }); }
        else { stack1 = depth0.content; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
        if (stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n";

        return buffer;
    });
});
window.require.register("engines/form/views/templates/template", function (exports, require, module) {
    module.exports = Handlebars.template(function (Handlebars, depth0, helpers, partials, data) {
        helpers = helpers || Handlebars.helpers;
        var buffer = "";


        return buffer;
    });
});
window.require.register("engines/form/views/view", function (exports, require, module) {
    var Core, FieldsetCollection, FieldsetCollectionView, FormView, template, _ref,
      __hasProp = {}.hasOwnProperty,
      __extends = function (child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

    Core = require('core');

    FieldsetCollection = require('engines/form/models/fieldset-collection');

    FieldsetCollectionView = require('engines/form/views/fieldset-collection');

    template = require('engines/form/views/templates/template');

    module.exports = FormView = (function (_super) {
        __extends(FormView, _super);

        function FormView() {
            _ref = FormView.__super__.constructor.apply(this, arguments);
            return _ref;
        }

        FormView.prototype.autoRender = true;

        FormView.prototype.className = 'page form';

        FormView.prototype.template = template;

        template = null;

        FormView.prototype.initialize = function () {
            FormView.__super__.initialize.apply(this, arguments);
            this.subscribeEvent('#rowAdded', function () {
                this.setValuesFromSerializedData();
            });
        };

        FormView.prototype.renderSubviews = function () {
            var collection, view;
            collection = new FieldsetCollection(this.model.get('fieldsets'));
            view = new FieldsetCollectionView({
                collection: collection,
                container: this.$el
            });
            return this.subview("fieldsetCollectionView", view);
        };

        FormView.prototype.setValuesFromSerializedData = function () {
            var data = this.model.get('serialized');
            if (data) {
                return $.each(data, function (i, obj) {
                    var $el, type;
                    $el = $('[name="' + obj.name + '"]');
                    type = $el.attr('type');
                    switch (type) {
                        case 'checkbox':
                        case 'radio':
                            return $el.filter('[value="' + obj.value + '"]').attr('checked', 'checked').parent('label').addClass('selected');
                        default:
                            if ($el.attr('contenteditable')) {
                                return $el.html(obj.value);
                            } else {
                                return $el.val(obj.value);
                            }
                    }
                });
            }
        };

        FormView.prototype.attach = function () {

            FormView.__super__.attach.apply(this, arguments);
            this.renderSubviews();
            this.setValuesFromSerializedData();
        };

        return FormView;

    })(Core.EngineView);

});
window.require.register("initialize", function (exports, require, module) {
    var Application;

    Application = require('application');

    $(function () {
        var options;
        options = {
            name: 'elaca-3-2-AlphabetizingPracticeForm'
        };
        window.App = new Application();
        App.initialize(options);
    });

	$(resizeTable);

    $(window).resize(resizeTable);
});

var resizeTable = function () {
    if ($(".scrollable-table-bottom").length > 0) {
        var newHeight = ($(window).height() - $(".scrollable-table-top").height()) * 0.90;
        if ($(".scrollable-table-bottom table").height() < newHeight)
            newHeight = $(".scrollable-table-bottom table").height() + 1;
        $(".scrollable-table-bottom").height(newHeight);
    }
    else
        setTimeout(resizeTable, 500);
};