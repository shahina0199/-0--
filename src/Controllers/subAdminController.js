// subAdminController.js

exports.create = async (req, res) => {
    res.status(200).json({ status: 'success', data: 'Subadmin created' });
  };
  
  exports.read = async (req, res) => {
    res.status(200).json({ status: 'success', data: 'Subadmin read' });
  };
  
  exports.delete = async (req, res) => {
    res.status(200).json({ status: 'success', data: 'Subadmin deleted' });
  };
  
  exports.update = async (req, res) => {
    res.status(200).json({ status: 'success', data: 'Subadmin updated' });
  };
  