<div class="modal fade" id="status{{ $contact_us->id }}" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Are you sure?</h4>
            </div>
            <div class="modal-body">
                <p>Do you want to update this status?</p>
            </div>
            <div class="modal-footer">
                <div>

                </div>
                <form action="{{ url('admin/contact_us/update/status/'.$contact_us->id) }}" method="post">
                    @csrf
                    <input type="hidden" name="is_enable" value="{{ $contact_us->is_enable ? 0 : 1 }}">
                    <button class="btn btn-danger">Update it</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </form>
            </div>
        </div>

    </div>
</div>
