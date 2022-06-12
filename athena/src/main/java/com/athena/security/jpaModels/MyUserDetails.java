package com.athena.security.jpaModels;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.athena.primary.abstrct.Account;
import lombok.Getter;
import lombok.Setter;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Setter
@Getter
public class MyUserDetails implements UserDetails {
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
    private String emailId;
    private String type="Bearer";
    private String password;
    private boolean active=true;
    private List<GrantedAuthority> authorities;
    private int accId;

    
    
    public MyUserDetails(Account user) {
        this.emailId = user.getEmailId();
        this.password=user.getPassword();
        this.accId=user.getId();
        this.active = true;
        this.authorities = Arrays.stream(user.getSecurityRoles().split(","))
                    .map(SimpleGrantedAuthority::new)
                    .collect(Collectors.toList());
    }
    
	@Override
	public String getUsername() {
		return emailId;
	}
    
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
    	System.out.println(authorities.toString());
    	return authorities;
    }

    
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
    	System.out.println("enable hehe");
    	 return true;
    	//return active;
    }


}
