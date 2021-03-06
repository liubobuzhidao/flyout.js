/**
 * Created by Yinxiong on 2016/1/2.
 */
/* @flow */

import $ from 'jquery'
import { noop } from 'helper.js'
import Flyout from './flyout'

export default function (anchor, ok: Function = noop, html: string = '') {
  const tpl = `<div class="flyout-box flyout-confirm"><p class="text"></p><div class="buttons"><button role="cancel" class="btn btn-sm btn-secondary">取消</button><button role="ok" class="btn btn-sm btn-primary">确认</button></div></div>`

  const flyout = new Flyout(tpl, {
    destroy: true
  })

  flyout.element.on('click', 'button[role]', e => {
    const type = $(e.target).attr('role')
    if (type === 'ok') {
      ok()
    }
    flyout.hide()
  })

  const text = flyout.element.find('p.text')

  if (html) {
    text.css('width', 'auto').show().html(html)
    if (flyout.element.outerWidth() > 300) {
      text.width('250')
    }
  } else {
    text.hide().html('')
  }

  flyout.show(anchor, 'top', 'center')

  return flyout
}
