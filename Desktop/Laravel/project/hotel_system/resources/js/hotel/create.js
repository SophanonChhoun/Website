import SingleImageUploader from "../components/SingleImageUploader";
new Vue({
    el: '#createHotel',
    components: {
        SingleImageUploader
    },
    data: {
        data: {
            name: '',
            street_address: '',
            country: '',
            city: '',
            zip: '',
            is_enable: '',
            image: '',
        },
        test: 'Testing',
        is_submit: false,
        error: '',
        image: '',
    },
    mounted() {
    },
    methods: {
        submit() {
            this.$validator.validateAll().then((result) => {
                this.is_submit = true
                let save = true;
                if(result && save) {
                    axios.post('/admin/hotel/create',this.data).then(response => {
                       if(response.data.success){
                           window.location.href = '/admin/hotel/list';
                       }else{
                           console.log(response.data.message);
                           this.error = response.data.message;
                       }
                    });
                } else {
                    //set Window location to top
                    window.scrollTo(0, 0)
                }
            })
        },

        uploadImage(event) {
            const input = event.target;
            if (input.files && input.files[0]) {
                var img = new Image();
                img.onload = function() {
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            this.image = e.target.result
                        }
                        reader.readAsDataURL(input.files[0])
                }
            }
        },

        uploadAddingImage(event) {
            let image = event.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = event => {
                Vue.set(this.data, 'image', event.target.result)
            }
        },
    }
});
