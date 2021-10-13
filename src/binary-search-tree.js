const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

constructor() {
  this.Root = null;
}
  root() {
    return this.Root;
  }

  add(data) {
  this.Root = addNewElement(this.Root, data);
  
  function addNewElement(node, data) {
    if(!node) {
      return new Node(data);
    }
    if(node.data === data) {
      return node;
    }
    if(data < node.value) {
      node.left = addNewElement(node.left, data)
    }
    else {
      node.right = addNewElement(node.right, data)
    }
    return node;
  }
  }

  has(data) {
    return searchElement(this.Root, data);

    function searchElement (node, data) {
    if(!node) {
      return false;
    }
    if(node.data === data) {
      return true;
    }
    // return data < node.left?searchElement(node.left, data):searchElement(node.right, data);
  if(data < node.left) {
      return searchElement(node.left, data)
    }
    else {
      return searchElement(node.right, data);
    }
  }
}

  find(data) {
    return searchElementValue(this.Root, data);

    function searchElementValue (node, data) {
    if(!node) {
      return null;
    }
    if(node.data === data) {
      return node;
    }
    if(data < node.left) {
      return searchElementValue(node.left, data)
      }
    else {
        return searchElementValue(node.right, data)
      }
    }
  }

  remove(data) {
    this.Root = RemoveElement(this.Root, data);

    function RemoveElement(node, data) {
      if(!node) {
        return null
      }
      if(data < node.data) {
        node.left = RemoveElement(node.left, data);
        return node;
      }
      else if(data > node.data) {
        node.right = RemoveElement(node.right, data)
        return node
      }
      else {
        if(!node.left && !node.right) {
          return null;
        }
        if(!node.left) {
          node = node.right;
          return node;
        }
        if(!node.right) {
          node = node.left;
          return node;
        }
        let minFromRight = node.right;
        while(minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = RemoveElement(node.right, minFromRight.data)
        return node;
      }
    }
  }

  min() {
    if (!this.Root) {
      return
    }
    let node = this.Root
    while (node.left) {
      node = node.left
    }
    return node.data
  }

  max() {
    if (!this.Root) {
      return
    }
    let node = this.Root
    while (node.right) {
      node = node.right
    }
    return node.data
  }
}
