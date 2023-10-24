let app = Vue.createApp({
    data(){
        return {
            name:'',
            mobile :'',
            confirmed:false,
            appliedCoupon: null,
            couponCode: "",
            coupons: [
                {
                code: "100TAKAOFF",
                discount: 100
                },
                {
                code: "200TAKAOFF",
                discount: 200
                }
            ],
            seatStates: {
                sold: {
                  text: "Sold",
                  color: "#ff0000"
                },
                available: {
                  text: "Available",
                  color: "#fff"
                },
                booked: {
                  text: "Booked",
                  color: "gray"
                },
                selected: {
                  text: "Selected",
                  color: "#00ff00"
                }
              },
    
            seats: [
            {
                name: "A1",
                type: "available",
                price: 500
            },
            {
                name: "A2",
                type: "available",
                price: 500
            },
            {
                name: "A3",
                type: "available",
                price: 500
            },
            {
                name: "A4",
                type: "available",
                price: 500
            },
            {
                name: "B1",
                type: "available",
                price: 450
            },
            {
                name: "B2",
                type: "available",
                price: 450
            },
            {
                name: "B3",
                type: "available",
                price: 450
            },
            {
                name: "B4",
                type: "available",
                price: 450
            },
            {
                name: "C1",
                type: "sold",
                price: 500
            },
            {
                name: "C2",
                type: "sold",
                price: 500
            },
            {
                name: "C3",
                type: "sold",
                price: 500
            },
            {
                name: "C4",
                type: "sold",
                price: 500
            },
            {
                name: "D1",
                type: "available",
                price: 400
            },
            {
                name: "D2",
                type: "available",
                price: 400
            },
            {
                name: "D3",
                type: "available",
                price: 400
            },
            {
                name: "D4",
                type: "available",
                price: 400
            },
            {
                name: "E1",
                type: "available",
                price: 300
            },
            {
                name: "E2",
                type: "available",
                price: 300
            },
            {
                name: "E3",
                type: "booked",
                price: 300
            },
            {
                name: "E4",
                type: "booked",
                price: 300
            },
            {
                name: "F1",
                type: "available",
                price: 300
            },
            {
                name: "F2",
                type: "available",
                price: 300
            },
            {
                name: "F3",
                type: "available",
                price: 300
            },
            {
                name: "F4",
                type: "available",
                price: 300
            }
            ]

        }
    },
    methods:{
        handleClick(index){
            let clickedSeat = this.seats[index];
        
            if(clickedSeat.type === 'booked' || clickedSeat.type === 'sold'){
                alert('You can not select this seat');
                return;
                }
            if(this.selectedSeats.length > 2){
                alert('You can not select more than 2 seats');
                return;
            }
            clickedSeat.type = (clickedSeat.type === 'selected') ? 'available' : 'selected';
          
        },
        confirm(){
            if(!this.name || !this.mobile){
               alert('Please give name and mobile number properly') 
               return;
            }else{
                this.confirmed = true;
            }
        }, 
         resetData() {
            this.confirmed = false;
            this.name = "";
            this.mobile = "";
            this.appliedCoupon = null;
      
            this.seats.forEach((seat) => {
              if (seat.type === "selected") {
                seat.type = "sold";
              }
            });
          }
    },
    computed:{
        selectedSeats(){
            let sc = this.seats.filter(item=> item.type === 'selected');
            return sc;
        },
        totalCost(){
            let tc =0;
            this.selectedSeats.forEach(seat => {
                tc += seat.price
            });
            if(this.appliedCoupon !== null){
                tc -= this.appliedCoupon.discount;
            }
            return tc;
        }
    },
    watch:{
        couponCode(newValue){
            if(newValue.length == 10){
                let searchedCoupon = this.coupons.filter(
                    (item)=> item.code === newValue
                    )

                    if(searchedCoupon.length == 1){
                        this.appliedCoupon = searchedCoupon[0];
                    }
             
            }
        }
    }
})

app.mount('#root');