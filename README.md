# title-notify
Simple plugin to notify with page title. The title resets automatically when page is active.

#Installation
Bower support
```javascript
bower install title-notification
```

#Usage
There are two types supported now: flash, scroll.

* Flash effect

This is the default effect, so the effect option is needless.
The message will show and hide periodically based on **interval** configuration.

```javascript
titleNotify.init({
    message: 'You have unread message'
    effect: 'flash'
});
```

* Scroll effect

The message will scroll from right to the left periodically based on **interval** configuration.

```javascript
titleNotify.init({
    message: 'You have unread message'
    effect: 'flash'
});
```

* Count

You can add a count number before title.
**counterWrapper** is used to specify the wrapper for counter, default wrapper is '(%count%)', count is used as the placeholder for replacing the count number.

```javascript
titleNotify.init({
});
```

Add count number
```javascript
titleNotify.counterAdd();
```

Minus count number
```javascript
titleNotify.counterSub();
```

Set count number directly, the number should be number or string containing number.
```javascript
titleNotify.counterSet(10);
```

# TODO
* Test Browser compatibility
