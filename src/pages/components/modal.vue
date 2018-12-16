<template>
    <div class="contents">
        <div class="modal fade" id="detailModal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ aTask.text }}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p v-if="!isTextArea">{{ displayComment }}</p>
                    <textarea v-if="isTextArea" class="form-control" id="exampleTextarea" rows="3" v-model="aTask.description" ></textarea>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="switchMode()">{{ displayFooterButton }}</button>
                </div>
                </div>
            </div>
        </div>
    </div>
            
</template>
        
<script>
    export default {
        props: ['tasks'],
        data: function() {
            return {
                aTask: {},
                defaultComment: 'Insert comment.',
                isTextArea: false,
                footerButtonLabel: {
                    edit: 'Edit comment',
                    confirm: 'Confirm'
                }
            }
        },
        methods: {
            switchMode: function() { 
                console.log("[func] switchMode : ", this.isTextArea)
                if (this.isTextArea) {
                    this.isTextArea = false;
                } else {
                    this.isTextArea = true;
                }
            },
            represent: function(data) {
                this.aTask = data;
                $('#detailModal').modal('show');
            },
            taskEditReflect: function() {
                // 編集内容の反映
                this.tasks.filter(task => task.id === this.aTask.id).map(task => aTask);
                console.log('tasks', this.tasks)
            }
        },
        computed: {
            displayComment: function() {
                return this.aTask.description !== '' ? this.aTask.description : this.defaultComment;
            },
            displayFooterButton: function() {
                return this.isTextArea ? this.footerButtonLabel.confirm : this.footerButtonLabel.edit
            }
        }
        
    }
</script>
        
