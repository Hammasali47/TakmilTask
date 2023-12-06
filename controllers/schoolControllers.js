const express = require('express')
const Address = require('../models/address')
const Organization = require('../models/organization')
const School = require('../models/school')


// POST /schools
exports.createSchool = async (req, res) => {
  try {
    const { name,schoolInfo, address, organization } = req.body;

    // Save address and organization
    const savedAddress = await new Address(address).save();
    const savedOrganization = await new Organization(organization).save();

    // Save school with address and organization IDs
    const school = await new School({ name,schoolInfo, address: savedAddress._id, organization: savedOrganization._id }).save();

    res.json(school);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};

// PUT /schools/:id
exports.updateSchool =  async (req, res) => {
  try {
    // const { id } = req.params;
    const updatedData = req.body;

    // Exclude name and address fields from update
    // delete updatedData.name;
    // delete updatedData.address;

    // Lookup school by name and address
    const schools = await School.find({ name: updatedData.name});
    const address = await Address.find({address: updatedData.address.address})

    // Update existing school if found
    if (schools.length && address.length) {
      await School.findByIdAndUpdate(schools[0]._id, {name:updatedData.name, schoolInfo:updatedData.schoolInfo});
      await Address.findByIdAndUpdate(address[0]._id,updatedData.address)
      await Organization.findByIdAndUpdate(schools[0].organization._id,updatedData.organization)
      await 
      res.json(schools[0]);
    } else {
      // Create new school if not found
    //   const newSchool = await new School({ ...updatedData }).save();
    const { name,schoolInfo, address, organization } = updatedData;

    // Save address and organization
    const savedAddress = await new Address(address).save();
    const savedOrganization = await new Organization(organization).save();

    // Save school with address and organization IDs
    const newSchool = await new School({ name,schoolInfo, address: savedAddress._id, organization: savedOrganization._id }).save();
      res.json(newSchool);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};

// GET /schools/:id
exports.getSchoolById = async (req, res) => {
  try {
    const { id } = req.params;
    const school = await School.findById(id).populate('address organization');
    res.json(school);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};

// GET /schools
exports.getSchool = async (req, res) => {
  try {
    const schools = await School.find({}).populate('address organization');
    res.json(schools);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};

// DELETE /schools/:id
exports.deleteSchool = async (req, res) => {
  try {
    const { id } = req.params;
    const school = await School.findById(id).populate('address organization');
    if(school){
    await School.findByIdAndDelete(id);
    await Address.findByIdAndDelete(school.address._id);
    await Organization.findByIdAndDelete(school.organization._id);
    res.send('School deleted successfully');
    }else{
        res.status(404).send("School not found")
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};