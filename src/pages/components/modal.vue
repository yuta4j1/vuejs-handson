<template>
    <div class="contents">
        <div class="modal fade" id="detailModal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ info.text }}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p v-if="!isTextArea">{{ displayComment }}</p>
                    <textarea v-if="isTextArea" class="form-control" id="exampleTextarea" rows="3" v-model="info.description" ></textarea>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="editMode()">Edit comment</button>
                    <button type="button" class="btn btn-primary" @click="confirm()">Confirm</button>
                </div>
                </div>
            </div>
        </div>
    </div>
            
</template>
        
<script>
    export default {
        props: ['todos'],
        data: function() {
            return {
                info:{},
                defaultComment: 'Insert comment.',
                isTextArea: false
            }
        },
        methods: {
            editMode: function() {
                this.isTextArea = true;
            },
            confim: function() {
                this.isTextArea = false;
            },
            represent: function(data) {
                this.info = data;
                $('#detailModal').modal('show');
            }
        },
        computed: {
            displayComment: function() {
                return this.info.description !== '' ? this.info.description : this.defaultComment;
            }
        }
        
    }
</script>
        
<style>
        
</style>
        
