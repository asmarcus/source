/* CURRENTLY IN: javascript/main.js */


    var nodes = null;
    var edges = null;
    var network = null;
    // randomly create some nodes and edges
    var data = getScaleFreeNetwork(25);
    var seed = 2;


    function destroy() {
      if (network !== null) {
        network.destroy();
        network = null;
      }
    }

    function draw() {
      destroy();
      nodes = [];
      edges = [];

      // create a network
      var container = document.getElementById('mynetwork');
      var options = {
        
        manipulation: {
          addNode: function (data, callback) {
            // filling in the popup DOM elements
            document.getElementById('operation').innerHTML = "Add Node";
            document.getElementById('node-id').value = data.id;
            document.getElementById('node-label').value = data.label;
            document.getElementById('saveButton').onclick = saveData.bind(this, data, callback);
            document.getElementById('cancelButton').onclick = clearPopUp.bind();
            document.getElementById('network-popUp').style.display = 'block';
          },
          editNode: function (data, callback) {
            // filling in the popup DOM elements
            document.getElementById('operation').innerHTML = "Edit Node";
            document.getElementById('node-id').value = data.id;
            document.getElementById('node-label').value = data.label;
            document.getElementById('saveButton').onclick = saveData.bind(this, data, callback);
            document.getElementById('cancelButton').onclick = cancelEdit.bind(this,callback);
            document.getElementById('network-popUp').style.display = 'block';
          },
          addEdge: function (data, callback) {
            if (data.from == data.to) {
              var r = confirm("Do you want to connect the node to itself?");
              if (r == true) {
                callback(data);
              }
            }
            else {
              callback(data);
            }
          }
        }
      };
      network = new vis.Network(container, data, options);
    }

    function clearPopUp() {
      document.getElementById('saveButton').onclick = null;
      document.getElementById('cancelButton').onclick = null;
      document.getElementById('network-popUp').style.display = 'none';
    }

    function cancelEdit(callback) {
      clearPopUp();
      callback(null);
    }

    function saveData(data,callback) {
      data.id = document.getElementById('node-id').value;
      data.label = document.getElementById('node-label').value;
      clearPopUp();
      callback(data);
    }