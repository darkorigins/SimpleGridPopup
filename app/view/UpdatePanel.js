/*
 * File: app/view/UpdatePanel.js
 *
 * This file was generated by Sencha Architect version 4.2.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.6.x Modern library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.6.x Modern. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('SimpleGridPopup.view.UpdatePanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.updatepanel',

    requires: [
        'SimpleGridPopup.view.UpdatePanelViewModel',
        'SimpleGridPopup.view.UpdatePanelViewController',
        'Ext.field.Text',
        'Ext.Button'
    ],

    controller: 'updatepanel',
    viewModel: {
        type: 'updatepanel'
    },
    floated: true,
    centered: true,
    modal: true,
    title: 'Update Record',

    items: [
        {
            xtype: 'textfield',
            name: 'firstName',
            label: 'Firstname',
            bind: {
                value: '{employee.firstName}'
            }
        },
        {
            xtype: 'textfield',
            name: 'lastName',
            label: 'Surname',
            bind: {
                value: '{employee.lastName}'
            }
        },
        {
            xtype: 'textfield',
            name: 'phonenumber',
            label: 'Phonenumber',
            bind: {
                value: '{employee.phonenumber}'
            }
        },
        {
            xtype: 'button',
            iconCls: 'x-fa fa-close',
            text: 'Cancel',
            listeners: {
                tap: 'onCancelButton'
            }
        },
        {
            xtype: 'button',
            iconCls: 'x-fa fa-check',
            text: 'Save',
            listeners: {
                tap: 'onSaveButton'
            }
        }
    ]

});