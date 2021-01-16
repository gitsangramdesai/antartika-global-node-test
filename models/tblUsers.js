
module.exports = (sequelize, Sequelize) => {

    const TblUser = sequelize.define("tblUser", {
            firstName: {
                type: Sequelize.STRING(50)
            },
            lastName: {
                type: Sequelize.STRING(50)
            }, 
            emailId:{
                type:Sequelize.STRING(100)
            },
            organization:{
                type:Sequelize.STRING(100)
            },
            password:{
                type:Sequelize.STRING(150)
            },
            employeeId:{
                type:Sequelize.STRING(150)
            }     
        },{
            paranoid: true,
            timestamps: true,
            indexes: [
                {
                    unique: true,
                    fields: ['emailId']
                },
                {
                    unique: true,
                    fields: ['employeeId']
                }
            ]
        });
        return TblUser;
    };