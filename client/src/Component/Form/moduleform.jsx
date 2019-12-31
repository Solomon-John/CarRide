import React, { Component } from 'react'

class moduleform extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div className="modal fade" id="modalAppointment" tabindex="-1" role="dialog" aria-labelledby="modalAppointmentLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modalAppointmentLabel">Appointment</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form action="#">
                        <div className="form-group">
                            <label for="appointment_name" className="text-black">Full Name</label>
                            <input type="text" className="form-control" id="appointment_name"/>
                        </div>
                        <div className="form-group">
                            <label for="appointment_email" className="text-black">Email</label>
                            <input type="text" className="form-control" id="appointment_email"/>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                            <div className="form-group">
                                <label for="appointment_date" className="text-black">Date</label>
                                <input type="text" className="form-control" id="appointment_date"/>
                            </div>    
                            </div>
                            <div className="col-md-6">
                            <div className="form-group">
                                <label for="appointment_time" className="text-black">Time</label>
                                <input type="text" className="form-control" id="appointment_time"/>
                            </div>
                            </div>
                        </div>
                        

                        <div className="form-group">
                            <label for="appointment_message" className="text-black">Message</label>
                            <textarea name="" id="appointment_message" className="form-control" cols="30" rows="10"></textarea>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Send Message" className="btn btn-primary"/>
                        </div>
                        </form>
                    </div>
                    
                    </div>
                </div>
                </div>

            </div>
        )
    }
}
moduleform.propTypes = {};
